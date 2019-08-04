const API_USER = "shpax";

export const fetchFormsList = async () => {
  const url = ` http://forms-app.brutgroot.com/${API_USER}/forms/list`;
  const res = await fetch(url);
  return await res.json();
};
