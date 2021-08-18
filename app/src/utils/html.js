const NtoBr = text => text.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)

export { NtoBr }