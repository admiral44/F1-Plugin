import { storage, startsWith } from '@forge/api';
import ForgeUI, { Fragment, Tabs, Tab, useState, Text, useEffect } from '@forge/ui';
import { DataDisplay } from '../Components/DataDisplay'
import { TableCmp } from '../Components/TableCmp';

export const IssueModule = () => {


    const [info, setInfo] = useState()
    // console.log("Email is here : ", info);

    useEffect(async () => {
        console.log("Here : ", setInfo(await storage.get('OAuth365-email')))
        return console.log( JSON.stringify( await storage.query().where('OAuth365-email', startsWith()) ) );
    }, []);

    return (
        <Fragment>
            <Tabs>
                <Tab label="Information" >
                    <DataDisplay />
                    {info == undefined ? <Text>Information about Latest Mail : undefined</Text> : <Text>Information about Latest Mail : {info}</Text>}
                </Tab>
                <Tab label="Table">
                    <TableCmp />
                </Tab>
            </Tabs>
        </Fragment>
    )
}