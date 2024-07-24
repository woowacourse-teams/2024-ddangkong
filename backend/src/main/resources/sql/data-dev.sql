INSERT INTO balance_content (category, name)
VALUES ('EXAMPLE', '민초 vs 반민초'),
       ('EXAMPLE', '월 150 백수 vs 월 500 직장인'),
       ('EXAMPLE', '팔만대장경 다 읽기 vs 대장내시경 팔만번 하기'),
       ('EXAMPLE', '개구리 맛 초콜릿 vs 초콜릿 맛 개구리'),
       ('EXAMPLE', '언제 죽을 지 알기 vs 어떻게 죽을 지 알기');

INSERT INTO balance_option (name, balance_content_id)
VALUES ('민초', 1),
       ('반민초', 1),
       ('월 150 백수', 2),
       ('월 500 직장인', 2),
       ('팔만대장경 다 읽기', 3),
       ('대장내시경 팔만번 하기', 3),
       ('개구리 맛 초콜릿', 4),
       ('초콜릿 맛 개구리', 4),
       ('언제 죽을 지 알기', 5),
       ('어떻게 죽을 지 알기', 5);
