package ddangkong.service.balance.option;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.option.BalanceOptionRepository;
import ddangkong.domain.balance.option.BalanceOptions;
import ddangkong.domain.room.member.Member;
import ddangkong.exception.balance.option.NotFoundBalanceOptionException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BalanceOptionService {

    private final BalanceOptionRepository balanceOptionRepository;

    @Transactional(readOnly = true)
    public BalanceOption getBalanceOption(long balanceOptionId) {
        return balanceOptionRepository.findById(balanceOptionId)
                .orElseThrow(NotFoundBalanceOptionException::new);
    }

    @Transactional(readOnly = true)
    public BalanceOptions getBalanceOptions(BalanceContent balanceContent) {
        List<BalanceOption> balanceOptions = balanceOptionRepository.findAllByBalanceContent(balanceContent);
        return new BalanceOptions(balanceOptions);
    }

    @Transactional(readOnly = true)
    public List<BalanceOption> getBalanceOptions(List<BalanceContent> balanceContents) {
        return balanceOptionRepository.findAllByBalanceContentIn(balanceContents);
    }

    @Transactional(readOnly = true)
    public List<BalanceOption> findMemberRoomBalanceVoteOptions(Member member) {
        return balanceOptionRepository.findMemberRoomBalanceVoteOptions(member);
    }

    @Transactional
    public BalanceOption createBalanceOption(String name, BalanceContent balanceContent) {
        return balanceOptionRepository.save(new BalanceOption(name, balanceContent));
    }

    @Transactional
    public void deleteByBalanceContent(BalanceContent balanceContent) {
        balanceOptionRepository.deleteByBalanceContent(balanceContent);
    }
}
