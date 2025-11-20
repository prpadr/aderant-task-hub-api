require('dotenv').config();

const stripQuotes = (value) => {
    if (!value) return '';
    return value.replace(/^['"]|['"]$/g, '');
};

console.log('Raw GITHUB_TOKEN from process.env:');
console.log('  Value:', process.env.GITHUB_TOKEN);
console.log('  Length:', process.env.GITHUB_TOKEN?.length);
console.log('  First char code:', process.env.GITHUB_TOKEN?.charCodeAt(0));
console.log('  Last char code:', process.env.GITHUB_TOKEN?.charCodeAt(process.env.GITHUB_TOKEN.length - 1));

console.log('\nAfter stripQuotes:');
const stripped = stripQuotes(process.env.GITHUB_TOKEN);
console.log('  Value:', stripped);
console.log('  Length:', stripped.length);
console.log('  First 15 chars:', stripped.substring(0, 15));
console.log('  Last 10 chars:', stripped.substring(stripped.length - 10));

console.log('\nExpected token should be:');
console.log('  Start with: ghp_');
console.log('  Length: 40 characters');
