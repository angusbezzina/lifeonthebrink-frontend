import Airtable from "airtable";

type AirtableProps = {
  name: string;
  email: string;
  message: string;
};

export const AirtableSubmission = ({
  name,
  email,
  message
}: AirtableProps) => {
  const base = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID ?? "");

  base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_NAME ?? "").create(
    [
      {
        fields: {
          Name: name,
          Email: email,
          Message: message,
        },
      },
    ],
    (err, records) => {
      if (err) {
        console.error(err);
        return;
      }
      records?.forEach((record) => {
        console.log(record.getId());
      });
    }
  );
};
