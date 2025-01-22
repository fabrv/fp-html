export type ElementProperties = Record<string, string>
export type ElementContent = string | string[]
export const Element = (tag: string) => (properties: ElementProperties = {}) => (content: ElementContent = '') => (
  `<${tag}${Object.values(properties).length > 0 ? ' ' : ''}${Object.entries(properties).map(e => `${e[0]}="${e[1]}"`).join(' ')}${content === '' ? '/' : ''}>`
  + (Array.isArray(content) ? (content as string[]).join('') : content)
  + `${content !== '' ? `</${tag}>` : ''}`
)

export const A = Element('a')
export const Abbr = Element('abbr')
export const Address = Element('address')
export const Area = Element('area')
export const Article = Element('article')
export const Aside = Element('aside')
export const Audio = Element('audio')
export const B = Element('b')
export const Base = Element('base')
export const Bdi = Element('bdi')
export const Bdo = Element('bdo')
export const Blockquote = Element('blockquote')
export const Body = Element('body')
export const Br = Element('br')
export const Button = Element('button')
export const Canvas = Element('canvas')
export const Caption = Element('caption')
export const Cite = Element('cite')
export const Code = Element('code')
export const Col = Element('col')
export const Colgroup = Element('colgroup')
export const Data = Element('data')
export const Datalist = Element('datalist')
export const Dd = Element('dd')
export const Del = Element('del')
export const Details = Element('details')
export const Dfn = Element('dfn')
export const Dialog = Element('dialog')
export const Div = Element('div')
export const Dl = Element('dl')
export const Dt = Element('dt')
export const Em = Element('em')
export const Embed = Element('embed')
export const Fieldset = Element('fieldset')
export const Figcaption = Element('figcaption')
export const Figure = Element('figure')
export const Footer = Element('footer')
export const Form = Element('form')
export const H1 = Element('h1')
export const H2 = Element('h2')
export const H3 = Element('h3')
export const H4 = Element('h4')
export const H5 = Element('h5')
export const H6 = Element('h6')
export const Head = Element('head')
export const Header = Element('header')
export const Hgroup = Element('hgroup')
export const Hr = Element('hr')
export const Html = Element('html')
export const I = Element('i')
export const Iframe = Element('iframe')
export const Img = Element('img')
export const Input = Element('input')
export const Ins = Element('ins')
export const Kbd = Element('kbd')
export const Label = Element('label')
export const Legend = Element('legend')
export const Li = Element('li')
export const Link = Element('link')
export const Main = Element('main')
export const Map = Element('map')
export const Mark = Element('mark')
export const Meta = Element('meta')
export const Meter = Element('meter')
export const Nav = Element('nav')
export const Noscript = Element('noscript')
export const Ol = Element('ol')
export const Optgroup = Element('optgroup')
export const Option = Element('option')
export const Output = Element('output')
export const P = Element('p')
export const Param = Element('param')
export const Picture = Element('picture')
export const Pre = Element('pre')
export const Progress = Element('progress')
export const Q = Element('q')
export const Rp = Element('rp')
export const Rt = Element('rt')
export const Ruby = Element('ruby')
export const S = Element('s')
export const Samp = Element('samp')
export const Script = Element('script')
export const Section = Element('section')
export const Select = Element('select')
export const Slot = Element('slot')
export const Small = Element('small')
export const Source = Element('source')
export const Span = Element('span')
export const Strong = Element('strong')
export const Style = Element('style')
export const Sub = Element('sub')
export const Summary = Element('summary')
export const Sup = Element('sup')
export const Table = Element('table')
export const Tbody = Element('tbody')
export const Td = Element('td')
export const Template = Element('template')
export const Textarea = Element('textarea')
export const Tfoot = Element('tfoot')
export const Th = Element('th')
export const Thead = Element('thead')
export const Time = Element('time')
export const Title = Element('title')
export const Tr = Element('tr')
export const Track = Element('track')
export const U = Element('u')
export const Ul = Element('ul')
export const Var = Element('var')
export const Video = Element('video')
export const Wbr = Element('wbr')
export const ObjectElement = Element('object')
export const Block = Element('block')

// Grabbed from a comment by @brubersjoe in https://gist.github.com/sente/1083506
export const format = (xml: string, indent: number = 2) => {
  const PADDING = ' '.repeat(indent);
  const reg = /(>)(<)(\/*)/g;
  let pad = 0;
  xml = xml.replace(reg, '$1\r\n$2$3');
  return xml.split('\r\n').map(node => {
    let indent = 0;
    if (node.match(/.+<\/\w[^>]*>$/)) {
      indent = 0;
    } else if (node.match(/^<\/\w/) && pad > 0) {
      pad -= 1;
    } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
      indent = 1;
    } else {
      indent = 0;
    }
    pad += indent;

    return PADDING.repeat(pad - indent) + node;
  }).join('\r\n');
}

