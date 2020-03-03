import React from 'react';
import MaterialTable from 'material-table';

export default function ListInfo(props) {
  return (
    <MaterialTable
     title="Person Information"
      columns={
        [
          { title: 'Name', field: 'name' },
          { title: 'Address', field: 'address' },
          { title: 'Email', field: 'my_email' },
          { title: 'Gender', field: 'gender' },
        ]
      }
      data={props.state.personData}
      actions={[
        rowData => ({
          icon: 'delete',
          tooltip: 'Delete User',
          onClick: (event, rowData) => props.state.handler.delete(event,rowData),
        })
      ]}
      options={{
        actionsColumnIndex: -1
      }}
    />
  );
}