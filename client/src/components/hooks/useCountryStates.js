// useCountryStates.js
import { useEffect, useMemo, useState } from 'react';
import { Country, State } from 'country-state-city';

/**
 * Hook: País -> Estado/Província
 * - countries: lista de países (name, isoCode)
 * - states: lista de estados do país selecionado (name, isoCode)
 */
export function useCountryStates(isOpen, countryIso2) {
  const countries = useMemo(() => {
    // [{ name, isoCode, ... }]
    return Country.getAllCountries()
      .map((c) => ({ name: c.name, iso2: c.isoCode }))
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  }, []);

  const [states, setStates] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(false); // aqui fica “false” (offline)
  const [loadingStates, setLoadingStates] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // reseta e carrega estados quando país muda
    setStates([]);
    if (!countryIso2) return;

    setLoadingStates(true);
    try {
      const list = State.getStatesOfCountry(countryIso2)
        .map((s) => ({ name: s.name, iso: s.isoCode }))
        .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

      setStates(list);
    } finally {
      setLoadingStates(false);
    }
  }, [isOpen, countryIso2]);

  return {
    countries,
    states,
    loadingCountries,
    loadingStates,
  };
}
