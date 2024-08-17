package ddangkong.service.balance.content;

import ddangkong.domain.balance.content.BalanceContent;
import ddangkong.domain.balance.content.BalanceContentRepository;
import ddangkong.domain.balance.content.Category;
import ddangkong.exception.BadRequestException;
import ddangkong.exception.InternalServerException;
import java.util.Collections;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BalanceContentService {

    private final BalanceContentRepository balanceContentRepository;

    @Transactional(readOnly = true)
    public BalanceContent getBalanceContent(Long contentId) {
        return balanceContentRepository.findById(contentId)
                .orElseThrow(() -> new BadRequestException("존재하지 않는 컨텐츠입니다."));
    }

    @Transactional(readOnly = true)
    public List<BalanceContent> pickBalanceContents(Category category, int pickCount) {
        List<BalanceContent> contents = balanceContentRepository.findByCategory(category);
        if (contents.size() < pickCount) {
            throw new InternalServerException("질문 수가 부족합니다. category: %s ".formatted(category));
        }

        Collections.shuffle(contents);
        return contents.subList(0, pickCount);
    }
}
