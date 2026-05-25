import ApiSupabse from "../ApiSupabase";

export async function GetDonations() {
  let { data, error } = await ApiSupabse.from("donations").select("id, amount, donated_at, currency").order('donated_at', {ascending: true});
  if (error) {
    console.error(error);
    return []
  }
  return data;
}