import { storage } from '@forge/api';
import ForgeUI, { Fragment, Tabs, Tab, useState, Text } from '@forge/ui';
import { DataDisplay } from '../Components/DataDisplay'
import { TableCmp } from '../Components/TableCmp';

export const IssueModule = () => {


    const information = async () => {
        return console.log(" Information is here : ", await storage.get('OAuth365-email'))
    }

    return (
        <Fragment>
            <Tabs>
                <Tab label="Information">
                    <DataDisplay />
                    {/* <Text>{data}</Text> */}
                </Tab>
                <Tab label="Table">
                    <TableCmp />
                </Tab>
            </Tabs>
        </Fragment>
    )
}