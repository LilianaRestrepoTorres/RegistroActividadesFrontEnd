import { RegistroActividadesFrontEndPage } from './app.po';

describe('registro-actividades-front-end App', () => {
  let page: RegistroActividadesFrontEndPage;

  beforeEach(() => {
    page = new RegistroActividadesFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
