import ForgeUI, { Fragment, useState, Form, TextField, Text, SectionMessage } from '@forge/ui';
import { storage } from '@forge/api';
import { TableCmp } from './TableCmp';

export const OAuthFrom = () => {

    const [formState, setFormState] = useState(undefined);

    const onSubmit = async (formData) => {

        try {
            if (formData.OAuth365Email && formData.OAuth365Password) {
                setFormState(formData);
                // console.log("We are at right place, Email : ", formData.OAuth365Email);
                await storage.set('OAuth365-email', formData.OAuth365Email);
                await storage.setSecret('OAuth365-pwd', formData.OAuth365Password);
            } else {
                console.log("Please fill all information.");
            }
        } catch (error) {
            console.log(error)
        }

    };


    // const goBack = () => { };
    // const actionButtons = [ 
    //   <Button text="Go back" onClick={goBack} />,
    // ];
    // actionButtons={actionButtons}

    return (
        <Fragment>
            {
                formState &&
                <SectionMessage title="Congrtulation, Data store successfully..!" appearance="confirmation">
                    <Text></Text>
                    {/* <Text>{JSON.stringify(formState)}</Text> */}
                </SectionMessage>
            }
            <Form onSubmit={onSubmit} >
                <TextField type="email" name="OAuth365Email" label="OAuth365 Email" placeholder="sam@gmail.com" isRequired />
                <TextField type="password" name="OAuth365Password" label="OAuth365 Password" placeholder="************" isRequired />
            </Form>
            <TableCmp data={formState} />
        </Fragment>
    )
}