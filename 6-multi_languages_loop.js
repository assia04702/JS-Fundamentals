cat > 6-multi_languages_loop.js <<'EOF'
#!/usr/bin/node

const messages = ['C is fun', 'Python is cool', 'JavaScript is amazing'];

for (let i = 0; i < messages.length; i++) {
  console.log(messages[i]);
}
EOF

