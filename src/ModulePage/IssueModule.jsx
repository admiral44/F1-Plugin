import ForgeUI, {  Fragment, Tabs, Tab, } from '@forge/ui';
import { DataDisplay } from '../Components/DataDisplay'
import { TableCmp } from '../Components/TableCmp';

export const IssueModule = () => {
    return (
        <Fragment>
            <Tabs>
                <Tab label="Information">
                    <DataDisplay />
                </Tab>
                <Tab label="Table">
                    <TableCmp />
                </Tab>
            </Tabs>
        </Fragment>
    )
}