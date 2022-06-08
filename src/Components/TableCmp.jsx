import ForgeUI, { Fragment, Text, Table, Head, Cell, Row } from '@forge/ui';

export const TableCmp = (props) => {
    const info = [props.data];
    // console.log("Table data : ", info.OAuth365Email, info.OAuth365Password );
    return (
        <Fragment>
            <Table>
                <Head>
                    <Cell>
                        <Text>OAuthEmail</Text>
                    </Cell>
                    <Cell>
                        <Text>OAuthPassword</Text>
                    </Cell>
                </Head>
                {info.map(props => (
                    <Row>
                        <Cell>
                            {props == undefined ? <Text>...</Text> : <Text>{props.OAuth365Email}</Text>}
                        </Cell>
                        <Cell>
                            {props == undefined ? <Text>...</Text> : <Text>{props.OAuth365Password}</Text>}
                        </Cell>
                    </Row>
                ))}
            </Table>
        </Fragment>
    )
}