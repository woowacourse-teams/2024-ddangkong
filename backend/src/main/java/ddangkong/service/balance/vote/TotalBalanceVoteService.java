package ddangkong.service.balance.vote;

import ddangkong.domain.balance.option.BalanceOption;
import ddangkong.domain.balance.vote.TotalBalanceVoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class TotalBalanceVoteService {

    private final TotalBalanceVoteRepository totalBalanceVoteRepository;

    @Transactional(readOnly = true)
    public long getVoteCount(BalanceOption balanceOption) {
        return totalBalanceVoteRepository.countByBalanceOption(balanceOption);
    }
}
