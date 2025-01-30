function connectToAgent(agentName) {
    // Beispielhafte Logik für die Verbindung mit einem Agenten
    switch (agentName) {
      case 'Alpha':
        alert(`Connecting to Agent Alpha...`);
        // Hier könntest du die DeepSeek API für Agent Alpha aufrufen
        break;
      case 'Beta':
        alert(`Connecting to Agent Beta...`);
        // Hier könntest du die DeepSeek API für Agent Beta aufrufen
        break;
      case 'Gamma':
        alert(`Connecting to Agent Gamma...`);
        // Hier könntest du die DeepSeek API für Agent Gamma aufrufen
        break;
      default:
        alert(`Unknown agent: ${agentName}`);
    }
  }
  
  // Beispielhafte Funktion, um die Verbindung zu einem Agenten herzustellen
  function connectToDeepSeekAPI(agentName) {
    // Hier würde die Logik für den API-Aufruf stehen
    console.log(`Connecting to DeepSeek API for ${agentName}...`);
    // Beispiel: fetch('https://api.deepseek.com/connect', { method: 'POST', body: JSON.stringify({ agent: agentName }) })
  }