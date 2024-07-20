SET REFERENTIAL_INTEGRITY FALSE;

TRUNCATE TABLE member;
TRUNCATE TABLE balance_option;
TRUNCATE TABLE balance_content;
TRUNCATE TABLE balance_vote;
TRUNCATE TABLE room;
TRUNCATE TABLE room_content;

ALTER TABLE member ALTER COLUMN ID RESTART WITH 1;
ALTER TABLE balance_option ALTER COLUMN ID RESTART WITH 1;
ALTER TABLE balance_content ALTER COLUMN ID RESTART WITH 1;
ALTER TABLE balance_vote ALTER COLUMN ID RESTART WITH 1;
ALTER TABLE room ALTER COLUMN ID RESTART WITH 1;
ALTER TABLE room_content ALTER COLUMN ID RESTART WITH 1;

INSERT INTO room() VALUES ();

INSERT INTO member(nickname, room_id)
VALUES ('mohamedeu al katan', 1), ('deundeun', 1), ('rupi', 1), ('rapper lee', 1);

INSERT INTO room_content(room_id, balance_content_id, created_at)
VALUES (1, 2, '2024-07-18 19:50:00.000'), (1, 1, '2024-07-18 20:00:00.000');

INSERT INTO balance_content(category, name)
VALUES ('EXAMPLE', '민초 vs 반민초'), ('EXAMPLE', '월 200 백수 vs 월 500 직장인');

INSERT INTO balance_option(name, balance_content_id)
VALUES ('민초', 1), ('반민초', 1), ('월 200 백수', 2), ('월 200 직장인', 2);

INSERT INTO balance_vote(balance_option_id, member_id)
VALUES (4, 1), (4, 2), (4, 3), (4, 4), (1, 1), (1, 2), (1, 3), (2, 4);

SET REFERENTIAL_INTEGRITY TRUE;
