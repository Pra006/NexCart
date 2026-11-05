import { inngest } from "./client";

export const syncUserCreated = inngest.createFunction(
  {
    id: "sync-user-created",
    triggers: [{ event: "clerk/user.created" }],
  },
  async ({ event }) => {
    console.log("Syncing user created event:", event);
    const { data } = event;
    console.log("User data:", data);
    await prisma.user.create({
      data: {
        id: data.id,
        email: data.email_addresses[0].email_address,
        name: data.first_name + " " + data.last_name,
        image: data.image_url,
      },
    });
  },
);

export const syncUserUpdated = inngest.createFunction(
  {
    id: "sync-user-updated",
    triggers: [{ event: "clerk/user.updated" }],
  },
  async ({ event }) => {
    const { data } = event;
    console.log("User data:", data);
    await prisma.user.updated({
      where: { id: data.id },
      data: {
        email: data.email_addresses[0].email_address,
        name: data.first_name + " " + data.last_name,
        image: data.image_url,
      },
    });
  },
);
export const syncUserDeleted = inngest.createFunction(
  {
    id: "sync-user-deleted",
    triggers: [{ event: "clerk/user.deleted" }],
  },
  async ({ event }) => {
    const { data } = event;
    console.log("User data:", data);
    await prisma.user.delete({
      where: { id: data.id },
    });
  },
);
