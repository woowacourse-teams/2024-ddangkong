INSERT INTO room (total_round, current_round)
VALUES (5, 2),
       (5, 1);

INSERT INTO member (nickname, room_id, is_master)
VALUES ('mohamedeu al katan', 1, true),
       ('deundeun', 1, false),
       ('rupi', 1, false),
       ('rapper lee', 1, false);

INSERT INTO balance_content (category, name)
VALUES ('EXAMPLE', '민초 vs 반민초'),
       ('EXAMPLE', '월 200 백수 vs 월 500 직장인');

INSERT INTO room_content (room_id, balance_content_id, round, created_at)
VALUES (1, 2, 1, '2024-07-18 19:50:00.000'),
       (1, 1, 2, '2024-07-18 20:00:00.000');

INSERT INTO balance_option (name, balance_content_id)
VALUES ('민초', 1),
       ('반민초', 1),
       ('월 200 백수', 2),
       ('월 200 직장인', 2);

INSERT INTO balance_vote (balance_option_id, member_id)
VALUES (4, 1),
       (4, 2),
       (4, 3),
       (4, 4),
       (1, 1),
       (1, 2),
       (1, 3),
       (2, 4);
