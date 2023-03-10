export const apiResponseParser = (text: string): Array<string> => {
  const splittedText: Array<string> = text.split(/[12345]/)
  const sentences: Array<string> = splittedText.map((elem) => {
    return elem.replaceAll('.', '').trim()
  })
  return sentences.filter((value) => value.length > 0)
}
