INSERT INTO room (total_round, current_round, time_limit, status)
VALUES (5, 2, 30000, 'PROGRESS'),
       (5, 1, 30000, 'PROGRESS'),
       (5, 1, 30000, 'PROGRESS');

INSERT INTO member (nickname, room_id, is_master)
VALUES ('mohamedeu al katan', 1, true),
       ('deundeun', 1, false),
       ('rupi', 1, false),
       ('rapper lee', 1, false),
       ('alpha', 2, true),
       ('bravo', 2, false);

INSERT INTO balance_content (category, name)
VALUES ('EXAMPLE', '민초 vs 반민초'),
       ('EXAMPLE', '월 200 백수 vs 월 500 직장인'),
       ('EXAMPLE', '다음 중 여행가고 싶은 곳은?'),
       ('EXAMPLE', '팔만대장경 다 읽기 vs 대장내시경 팔만번 하기'),
       ('EXAMPLE', '개구리 맛 초콜릿 vs 초콜릿 맛 개구리');

INSERT INTO room_content (room_id, balance_content_id, round, round_ended_at, is_used)
VALUES (1, 2, 1, '2024-07-18 19:50:32.000', false),
       (1, 1, 2, '2024-07-18 20:00:32.000', false),
       (1, 3, 3, null, false),
       (1, 4, 4, null, false),
       (1, 5, 5, null, false),
       (3, 1, 1, '2024-07-18 20:00:32.000', false);

INSERT INTO balance_option (name, balance_content_id)
VALUES ('민초', 1),
       ('반민초', 1),
       ('월 200 백수', 2),
       ('월 200 직장인', 2),
       ('산', 3),
       ('바다', 3),
       ('팔만대장경 다 읽기', 4),
       ('대장내시경 팔만번 하기', 4),
       ('개구리 맛 초콜릿', 5),
       ('초콜릿 맛 개구리', 5);

INSERT INTO balance_vote (balance_option_id, member_id)
VALUES (4, 1),
       (4, 2),
       (4, 3),
       (4, 4),
       (1, 1),
       (1, 2),
       (1, 3),
       (2, 4),
       (2, 5),
       (2, 6);
