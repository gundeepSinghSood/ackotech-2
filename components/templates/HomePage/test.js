import UniqueBox from '../../organisms/UniqueBox';
import OurPartner from '../../organisms/OurPartner';
import SlickSlider from '../../molecules/SlickSlider';

function DocumentTitle({ title }) {
  const { data, loading, error } = useQuery(JOBS_QUERY);
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {JSON.stringify(error)}</p>;
    }
    return (
      <section className="home-page">
        <SlickSlider slider={hero.data} setting={sliderSetting} headerText={heroText} />
        <OurPartner compData={ourPartner} />
        <UniqueBox boxData={uniqueBox} />
      </section>
    )
}