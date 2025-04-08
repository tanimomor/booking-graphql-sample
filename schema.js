export const typeDefs = `#graphql
    # Room type definition
    type Room {
        id: ID!
        room_number: String!
        room_type: String!
        price_per_night: Float!
    }

    # Guest type definition
    type Guest {
        id: ID!
        full_name: String!
        email: String
        phone: String
    }

    # Booking type definition
    type Booking {
        id: ID!
        guest: Guest!
        room: Room!
        check_in: String!
        check_out: String!
        booking_source: String!
        status: String!
    }

    # Payment type definition
    type Payment {
        id: ID!
        booking: Booking!
        payment_date: String!
        amount: Float!
        payment_method: String
        service_type: String!
    }

    # ServiceUsed type definition
    type ServiceUsed {
        id: ID!
        booking: Booking!
        service_name: String!
        service_date: String!
        price: Float!
    }

    # RevenueSummary view definition
    type RevenueSummary {
        payment_date: String!
        amount: Float!
        service_type: String!
        booking_source: String!
        room_type: String!
    }

    # Query type definition
    type Query {
        rooms: [Room!]!
        room(id: ID!): Room
        guests: [Guest!]!
        guest(id: ID!): Guest
        bookings: [Booking!]!
        booking(id: ID!): Booking
        payments: [Payment!]!
        payment(id: ID!): Payment
        servicesUsed: [ServiceUsed!]!
        serviceUsed(id: ID!): ServiceUsed
        revenueSummary: [RevenueSummary!]!
    }
`
export default typeDefs;
