import ForgeUI, { Fragment, Text, Table, Head, Cell, Row } from '@forge/ui';

export const TableCmp = (props) => {
    // console.log("data is here : ", [props.data]);
    const info = [props.data];
    return (
        <Fragment>
            <Table>
                <Head>
                    <Cell>
                        <Text>Office365 Email</Text>
                    </Cell>
                    <Cell>
                        <Text>Office365 Pwd</Text>
                    </Cell>
                </Head>
                {info.map(props => (
                    <Row>
                        <Cell>
                            {props == undefined ? <Text>...</Text> : <Text>{props.email}</Text>}
                        </Cell>
                        <Cell>
                            {props == undefined ? <Text>...</Text> : <Text>{props.pws}</Text>}
                        </Cell>
                    </Row>
                ))}
            </Table>
        </Fragment>
    )
}