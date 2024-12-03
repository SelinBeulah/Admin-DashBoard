let users = [
    { id: 1, name: "John Doe", email: "john@gmail.com", role: "User", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@gmail.com", role: "User", status: "Inactive" },
    { id: 3, name: "JesuBalan", email: "jesu@gmail.com", role: "User", status: "Active" },
    { id: 4, name: "Smith", email: "jane@gmail.com", role: "User", status: "Inactive" },
    { id: 5, name: "Johna", email: "johna@gmail.com", role: "User", status: "Active" },
    { id: 6, name: "Sathrak", email: "sathrak@gmail.com", role: "User", status: "Inactive" },
    { id: 7, name: "Daniel", email: "Daniel@gmail.com", role: "User", status: "Active" },
    { id: 8, name: "Sharon", email: "sharpn@gmail.com", role: "User", status: "Inactive" },
    { id: 9, name: "Kingslin", email: "kingslin01@gmail.com", role: "User", status: "Active" },
    { id: 10, name: "Snowlyn", email: "snowlyn@gmail.com", role: "User", status: "Inactive" },
    { id: 11, name: "John", email: "john@gmail.com", role: "User", status: "Active" },
    { id: 12, name: "Esther", email: "esther@gmail.com", role: "User", status: "Inactive" },
  ];
  
  let roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] },
  ];
  
  export const getUsers = () => Promise.resolve([...users]);
  
  export const addUser = (user) => {
    users.push({ id: users.length + 1, ...user });
    return Promise.resolve(user);
  };
  
  export const updateUser = (id, updatedUser) => {
    users = users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user));
    return Promise.resolve(updatedUser);
  };
  
  export const deleteUser = (id) => {
    users = users.filter((user) => user.id !== id);
    return Promise.resolve();
  };
  
  export const getRoles = () => Promise.resolve([...roles]);
  
  export const addRole = (role) => {
    roles.push({ id: roles.length + 1, ...role });
    return Promise.resolve(role);
  };
  
  export const updateRole = (id, updatedRole) => {
    roles = roles.map((role) => (role.id === id ? { ...role, ...updatedRole } : role));
    return Promise.resolve(updatedRole);
  };
  