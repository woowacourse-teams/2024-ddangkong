INSERT INTO balance_content (category, name)
VALUES ('IF', '민초 vs 반민초'),
       ('IF', '월 200 백수 vs 월 500 직장인'),
       ('IF', '다음 중 여행가고 싶은 곳은?'),
       ('IF', '팔만대장경 다 읽기 vs 대장내시경 팔만번 하기'),
       ('IF', '개구리 맛 초콜릿 vs 초콜릿 맛 개구리');

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

INSERT INTO total_balance_vote(balance_option_id)
VALUES (1),
       (2);

INSERT INTO room (uuid, total_round, current_round, time_limit, status, category)
VALUES ('uuid1', 5, 2, 10000, 'PROGRESS', 'IF'),
       ('uuid2', 5, 1, 10000, 'PROGRESS', 'IF'),
       ('uuid3', 5, 1, 10000, 'PROGRESS', 'IF'),
       ('uuid4', 3, 1, 10000, 'READY', 'IF'),
       ('uuid5', 3, 1, 10000, 'FINISH', 'IF'),
       ('uuid6', 3, 1, 10000, 'FINISH', 'IF'),
       ('uuid7', 3, 1, 10000, 'READY', 'IF');

INSERT INTO member (nickname, room_id, is_master)
VALUES ('mohamedeu al katan', 1, true),
       ('deundeun', 1, false),
       ('rupi', 1, false),
       ('rapper lee', 1, false),
       ('alpha', 2, true),
       ('bravo', 2, false),
       ('sunday', 3, true),
       ('maru', 3, false),
       ('pomae', 3, false),
       ('ready player', 4, true),
       ('finish player', 5, true),
       ('master', 6, true),
       ('giveUpMember', 1, false);

INSERT INTO room_content (room_id, balance_content_id, round, round_ended_at)
VALUES (1, 2, 1, '2024-07-18 19:50:32.000'),
       (1, 1, 2, '2024-07-18 20:00:32.000'),
       (1, 3, 3, null),
       (1, 4, 4, null),
       (1, 5, 5, null),
       (3, 1, 1, '2024-07-18 20:00:32.000');

INSERT INTO room_balance_vote (member_id, balance_option_id)
VALUES (1, 1),
       (2, 1),
       (3, 1),
       (4, 2),
       (5, 2),
       (6, 2),
       (1, 4),
       (2, 4),
       (3, 4),
       (4, 4);
