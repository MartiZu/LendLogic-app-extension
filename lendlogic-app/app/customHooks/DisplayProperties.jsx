import getProperties from "@/library/getProperties";

export default async function GetProperties() {
  try {
    const propertiesData = await getProperties();
    // console.log(propertiesData);

    const property = propertiesData.map((property) => {
      const searchPostcode = property.postcode.split(" ")[0];
      const searchValue = property.value;
      // console.log(searchPostcode);
      // console.log(searchValue);

      return {
        searchPostcode,
        searchValue,
      };
    });
    return { property };
  } catch (error) {
    console.error("Error fetching property data:", error);
    // Handle the error or return a default value as needed
  }
}
