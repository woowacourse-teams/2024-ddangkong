package ddangkong.controller.room;

import ddangkong.aop.logging.Polling;
import ddangkong.facade.room.RoomFacade;
import ddangkong.facade.room.dto.InitialRoomResponse;
import ddangkong.facade.room.dto.RoomInfoResponse;
import ddangkong.facade.room.dto.RoomJoinRequest;
import ddangkong.facade.room.dto.RoomJoinResponse;
import ddangkong.facade.room.dto.RoomMemberResponse;
import ddangkong.facade.room.dto.RoomSettingRequest;
import ddangkong.facade.room.dto.RoomStatusResponse;
import ddangkong.facade.room.dto.RoundFinishedResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Validated
@RequiredArgsConstructor
public class RoomController {

    private final RoomFacade roomFacade;
    private final RoomMemberCookieEncryptor roomMemberCookieEncryptor;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/balances/rooms")
    public RoomJoinResponse createRoom(@Valid @RequestBody RoomJoinRequest request,
                                       HttpServletRequest httpRequest,
                                       HttpServletResponse httpResponse) {
        RoomJoinResponse roomJoinResponse = roomFacade.createRoom(request.nickname());
        setEncryptCookie(httpRequest, httpResponse, roomJoinResponse.member().memberId());
        return roomJoinResponse;
    }

    @GetMapping("/balances/rooms/member")
    public RoomMemberResponse getRoomMemberInfo(@CookieValue(name = "${cookie.rejoin-key}") String cookieValue) {
        return roomFacade.getRoomMemberInfo(roomMemberCookieEncryptor.getDecodedCookieValue(cookieValue));
    }

    @Polling
    @GetMapping("/balances/rooms/{roomId}")
    public RoomInfoResponse getBalanceGameRoomInfo(@Positive @PathVariable Long roomId) {
        return roomFacade.getRoomInfo(roomId);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping("/balances/rooms/{roomId}")
    public void updateRoomSetting(@PathVariable @Positive Long roomId,
                                  @RequestBody RoomSettingRequest request) {
        roomFacade.updateRoomSetting(roomId, request);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/balances/rooms/{uuid}/members")
    public RoomJoinResponse joinRoom(@PathVariable String uuid,
                                     @Valid @RequestBody RoomJoinRequest request,
                                     HttpServletRequest httpRequest,
                                     HttpServletResponse httpResponse) {
        RoomJoinResponse roomJoinResponse = roomFacade.joinRoom(request.nickname(), uuid);
        setEncryptCookie(httpRequest, httpResponse, roomJoinResponse.member().memberId());
        return roomJoinResponse;
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/balances/rooms/{roomId}/members/{memberId}")
    public void leaveRoom(@PathVariable @Positive Long roomId,
                          @PathVariable @Positive Long memberId) {
        roomFacade.leaveRoom(roomId, memberId);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping("/balances/rooms/{roomId}/start")
    public void startGame(@PathVariable @Positive Long roomId) {
        roomFacade.startGame(roomId);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping("/balances/rooms/{roomId}/next-round")
    public void moveToNextRound(@PathVariable @Positive Long roomId) {
        roomFacade.moveToNextRound(roomId);
    }

    @Polling
    @GetMapping("/balances/rooms/{roomId}/round-finished")
    public RoundFinishedResponse getRoundFinished(@Positive @PathVariable Long roomId,
                                                  @Positive @RequestParam int round) {
        return roomFacade.getRoundFinished(roomId, round);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping("/balances/rooms/{roomId}/reset")
    public void resetRoom(@PathVariable @Positive Long roomId) {
        roomFacade.resetRoom(roomId);
    }

    @GetMapping("/balances/rooms/{uuid}/status")
    public RoomStatusResponse getRoomStatus(@NotBlank @PathVariable String uuid) {
        return roomFacade.getRoomStatus(uuid);
    }

    @Polling
    @GetMapping("/balances/rooms/{roomId}/initial")
    public InitialRoomResponse isInitialRoom(@PathVariable @Positive Long roomId) {
        return roomFacade.isInitialRoom(roomId);
    }

    private void setEncryptCookie(HttpServletRequest request,
                                  HttpServletResponse response,
                                  Object cookieValue) {
        String origin = request.getHeader(HttpHeaders.ORIGIN);
        ResponseCookie encodedCookie = roomMemberCookieEncryptor.getEncodedCookie(cookieValue, origin);
        response.addHeader(HttpHeaders.SET_COOKIE, encodedCookie.toString());
    }
}
