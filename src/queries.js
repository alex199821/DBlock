import { gql } from "@apollo/client";

export const ALL_ATTRIBUTES = gql`
  query {
    allAttributes {
      link
      description
      id
    }
  }
`;

export const HEADER = gql`
  query {
    headerInfo {
      name
      about
    }
  }
`;

export const VIDEO = gql`
  query {
    videoSource {
      video
    }
  }
`;

export const ADDRESS = gql`
  query {
    addressInfo {
      address
    }
  }
`;

export const CONTACTS = gql`
  query {
    contactInfo {
      address
      facebookPath
      instagramPath
    }
  }
`;

export const FORM_INFO = gql`
  query {
    formInfo {
      singupInfo
      name {
        standardName
        highlightedName
      }
      lastName {
        standardLastName
        highlightedLastName
      }
      email
      terms
      submitButton
      errorMessage
    }
  }
`;

export const ADD_SUBSCRIBER = gql`
  mutation createSubscriber(
    $name: String!
    $lastName: String!
    $email: String!
  ) {
    subscribe(name: $name, lastName: $lastName, email: $email) {
      name
      lastName
      email
    }
  }
`;

// export const ADD_SUBSCRIBER = gql`
//   mutation createSubscriber(
//     $name: String!
//     $lastName: String
//     $email: String!
//   ) {
//     subscribe(
//       name: $name
//       lastName: $lastName
//       email: $email
//     ) {
//       name
//       lastName
//       email
//     }
//   }
// `;
