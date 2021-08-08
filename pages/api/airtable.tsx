import Airtable from "airtable";

import { AIRTABLE } from 'lib/constants';

type AirtableProps = {
  name: string;
  email: string;
  message: string;
};

export const AirtableSubmission = async ({
  name,
  email,
  message
}: AirtableProps) => {
  const base = new Airtable({
    apiKey: AIRTABLE.API_KEY,
  }).base(AIRTABLE.BASE_ID);

  console.log('airtable', name, email, message);

  base(AIRTABLE.BASE_NAME).create(
    [
      {
        fields: {
          Name: name,
          Email: email,
          Message: message,
        },
      },
    ],
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
};
