export const generateAISuggestions = (title, description, priority) => {
  const text = description.toLowerCase();

  let category = "General";
  let team = "Support";

  if (text.includes("wifi") || text.includes("network"))
    category = "Network", team = "IT";

  if (text.includes("ac") || text.includes("air"))
    category = "Facilities", team = "Maintenance";

  if (text.includes("login") || text.includes("password"))
    category = "Access", team = "Admin";

  const summary =
    description.length > 80
      ? description.slice(0, 80) + "..."
      : description;

  const dueDays =
    priority === "High" ? 1 :
    priority === "Medium" ? 3 : 5;

  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + dueDays);

  return {
    summary,
    category,
    team,
    dueDate: dueDate.toDateString()
  };
};