SET REFERENTIAL_INTEGRITY FALSE;

TRUNCATE TABLE member;
TRUNCATE TABLE balance_option;
TRUNCATE TABLE balance_question;
TRUNCATE TABLE balance_vote;
TRUNCATE TABLE room;
TRUNCATE TABLE room_question;

ALTER TABLE member ALTER COLUMN ID RESTART WITH 1;
ALTER TABLE balance_option ALTER COLUMN ID RESTART WITH 1;
ALTER TABLE balance_question ALTER COLUMN ID RESTART WITH 1;
ALTER TABLE balance_vote ALTER COLUMN ID RESTART WITH 1;
ALTER TABLE room ALTER COLUMN ID RESTART WITH 1;
ALTER TABLE room_question ALTER COLUMN ID RESTART WITH 1;

INSERT INTO room() VALUES ();

INSERT INTO member(nickname, room_id) VALUES ('mohamedeu al katan', 1);
INSERT INTO member(nickname, room_id) VALUES ('deundeun ', 1);
INSERT INTO member(nickname, room_id) VALUES ('rupi', 1);
INSERT INTO member(nickname, room_id) VALUES ('rapper lee', 1);

INSERT INTO room_question(room_id, balance_question_id, created_at) VALUES (1, 1, '2024-07-18 20:00:00.000');

INSERT INTO balance_question(category, content) VALUES ('EXAMPLE', '똥 맛 카레 vs 카레 맛 똥');

INSERT INTO balance_option(content, balance_question_id) VALUES ('똥 맛 카레', 1);
INSERT INTO balance_option(content, balance_question_id) VALUES ('카레 맛 똥', 1);

INSERT INTO balance_vote(balance_option_id, member_id) VALUES (1, 1);
INSERT INTO balance_vote(balance_option_id, member_id) VALUES (1, 2);
INSERT INTO balance_vote(balance_option_id, member_id) VALUES (1, 3);
INSERT INTO balance_vote(balance_option_id, member_id) VALUES (2, 4);

SET REFERENTIAL_INTEGRITY TRUE;
