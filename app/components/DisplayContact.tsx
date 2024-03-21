import { contactTypes } from '@/types/commonTypes'
import React from 'react'

// interface DisplayContactProps {
//   contactTypes: contactTypes;
// }

// const DisplayContact: React.FC<DisplayContactProps> = ({ contactTypes }) => {
//   return (
//     <div>
//       <div>Name: {contactTypes.name}</div>
//       <div>Email: {contactTypes.email}</div>
//       <div>Message: {contactTypes.mes}</div>
//       <div>Phone: {contactTypes.phn}</div>
//     </div>
//   );
// };

// export default DisplayContact;


export default function DisplayContact(props: { contactTypes: contactTypes[] }) {
  return (
    <div>

      <div >
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Phone</th>
          </tr>
          {props.contactTypes.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mes}</td>
                <td>{item.phn}</td>
              </tr>
            )
          })}
        </table>
      </div>

    </div>
  )
}
