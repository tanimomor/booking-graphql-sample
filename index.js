import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './_db.js';  // Assuming you have a database connection setup
import { typeDefs } from './schema.js';

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      rooms() {
        // Assuming `db.rooms` holds your room data (replace with actual DB query logic)
        return db.rooms;
      },
      room(_, args) {
        // Find a room by ID
        return db.rooms.find((room) => room.id === args.id);
      },
      guests() {
        return db.guests;
      },
      guest(_, args) {
        return db.guests.find((guest) => guest.id === args.id);
      },
      bookings() {
        return db.bookings;
      },
      booking(_, args) {
        return db.bookings.find((booking) => booking.id === args.id);
      },
      payments() {
        return db.payments;
      },
      payment(_, args) {
        return db.payments.find((payment) => payment.id === args.id);
      },
      servicesUsed() {
        return db.servicesUsed;
      },
      serviceUsed(_, args) {
        return db.servicesUsed.find((service) => service.id === args.id);
      },
      revenueSummary() {
        // Assuming `db.revenueSummary` is a computed view or fetched data
        return db.revenueSummary;
      },
    },
    // You can also define resolvers for mutations here if you have any
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
