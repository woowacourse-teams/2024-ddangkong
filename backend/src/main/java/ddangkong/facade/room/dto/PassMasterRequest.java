package ddangkong.facade.room.dto;

import jakarta.validation.constraints.Positive;

public record PassMasterRequest(@Positive Long nextMasterId) {
}
