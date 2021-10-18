import type { NextPage } from "next";
import { SafeEnvironment } from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import { PageTitle } from "ui/components/data-display/PageTitle/PageTitle";
import { UserInformation } from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionis da sua localidade"
        }
      />

      <UserInformation
      name={'Clivaly Rodolpho'}
      picture={'https://github.com/clivaly.png'}
      rating={4}
      description={'Goiânia'} />
    </div>
  );
};

export default Home;
