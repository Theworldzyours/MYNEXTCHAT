// Test script to verify OpenRouter integration
const fetch = require('node-fetch');

async function testOpenRouterIntegration() {
  console.log('🧪 Testing OpenRouter Integration...\n');

  // Test 1: Check if OpenRouter API handler exists
  try {
    const response = await fetch('http://localhost:3000/api/openrouter', {
      method: 'OPTIONS'
    });
    console.log('✅ OpenRouter API handler exists:', response.status === 200);
  } catch (error) {
    console.log('❌ OpenRouter API handler test failed:', error.message);
  }

  // Test 2: Check if OpenRouter models endpoint works
  try {
    const response = await fetch('http://localhost:3000/api/openrouter/models', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer test-key',
        'Content-Type': 'application/json'
      }
    });
    console.log('✅ OpenRouter models endpoint accessible:', response.status);
  } catch (error) {
    console.log('❌ OpenRouter models endpoint test failed:', error.message);
  }

  // Test 3: Check if OpenRouter provider is available in constants
  const constants = require('./app/constant.ts');
  console.log('✅ OpenRouter in ServiceProvider:', 'OpenRouter' in constants.ServiceProvider);
  console.log('✅ OpenRouter in ModelProvider:', 'OpenRouter' in constants.ModelProvider);

  console.log('\n🎉 OpenRouter integration tests completed!');
}

testOpenRouterIntegration().catch(console.error);
