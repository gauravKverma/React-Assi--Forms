import React from 'react'
import styles from "./table.module.css"

const Table = ({save}) => {
  return (
    <div className={styles.maindiv}>
      <table>
        <tbody>
          <tr>
            <th className={styles.column}>
              {"Name"}
            </th>
            <th className={styles.column}>
              {"Age"}
            </th>
            <th className={styles.column}>
              {"Department"}
            </th>
            <th className={styles.column}>
              {"Marital Status"}
            </th>
            <th className={styles.column}>
              {"Address"}
            </th>
            <th className={styles.column}>
              {"Salary"}
            </th>
          </tr>
        </tbody>
      </table>
      {save.map((data,i) => (
        <table key={i}>
          <tbody>
            <tr>
              <td className={styles.column}>{data.form.name}</td>
              <td className={styles.column}>{data.form.age}</td>
              <td className={styles.column}>{data.form.department}</td>
              <td className={styles.column}>{data.form.maritalStatus}</td>
              <td className={styles.column}>{data.form.address}</td>
              <td className={styles.column}>{data.form.salary}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  )
}

export default Table