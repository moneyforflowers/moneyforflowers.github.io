import ApiSupabse from "../ApiSupabase";

export async function GetGoals() {
  let { data, error } = await ApiSupabse.from("goals_status").select("*");
  if (error) {
    console.error(error);
    return []
  }
  return data;
}