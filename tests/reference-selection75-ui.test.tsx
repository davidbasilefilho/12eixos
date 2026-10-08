import { expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { UnrankedReferences } from '../src/ui/App';
import { selectedIdeologyEntries, archivedReferenceEntries } from '../src/data/reference-selected-catalog';

test('research-only Hughes renders sources and unknown status without a proximity percentage', () => {
  const entry = selectedIdeologyEntries.find(item => item.id === 'ideology-democratic-transhumanism-hughes')!;
  const html = renderToStaticMarkup(<UnrankedReferences references={[entry]}/>);
  expect(html).toContain('Hughes');
  expect(html).toContain('Fontes em 0/12 eixos');
  expect(html).toContain('ainda não tem codificação documental validada');
  expect(html).toContain('source-list');
  expect(html).not.toContain('match-score');
  expect(html).not.toContain('0%');
});

test('archived eligible references remain readable and are labeled outside selection, not insufficient', () => {
  const original = archivedReferenceEntries.find(item => item.id === 'social-liberalism')!;
  const html = renderToStaticMarkup(<UnrankedReferences references={[original]} archived/>);
  expect(html).toContain('Arquivo de referências fora da seleção');
  expect(html).toContain('fora da seleção atual');
  expect(html).toContain(original.name);
  expect(html).toContain(original.sources[0].url.replaceAll('&', '&amp;'));
  expect(html).not.toContain('Referências sem evidência suficiente para ordenar');
  expect(html).not.toContain('match-score');
});
