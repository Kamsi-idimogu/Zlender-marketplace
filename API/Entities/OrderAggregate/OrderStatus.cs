namespace API.Entities.OrderAggregate
{
    public enum OrderStatus
    {
        Pending,
        PaymentReceived,
        PaymentFailed
    }
}

//could add other statuses like order shipped, order canceled later on