package ddangkong.facade.room.balance.roomvote.operation;

@FunctionalInterface
public interface VoteOperation<T> {

    T execute(VoteContext voteContext);
}
