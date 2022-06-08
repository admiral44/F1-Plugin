import ForgeUI, { render, IssuePanel, AdminPage } from '@forge/ui';
import { AdminModule } from './ModulePage/AdminModule';
import { IssueModule } from './ModulePage/IssueModule'

export const isuuePanelrun = render(
    <IssuePanel>
        <IssueModule />
    </IssuePanel>
);

export const adminPagerun = render(
    <AdminPage>
        <AdminModule />
    </AdminPage>
);