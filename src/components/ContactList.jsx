import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const List = styled.ul`
  padding: 0;
`;

const ListItem = styled(motion.li)`
  list-style-type: none;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: #ff6347;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      <AnimatePresence>
        {contacts.map((contact) => (
          <ListItem
            initial={{
              opacity: 0,
              translateX: "100%",
            }}
            animate={{
              opacity: 1,
              translateX: 0,
            }}
            exit={{
              opacity: 0,
              translateX: "-100%",
            }}
            transition={{
              duration: 0.3,
            }}
            key={contact.id}
          >
            {contact.name}: {contact.number}
            <div>
              <Button type="button" onClick={() => deleteContact(contact.id)}>
                Delete
              </Button>
            </div>
          </ListItem>
        ))}
      </AnimatePresence>
    </List>
  );
};

export default ContactList;
