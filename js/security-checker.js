// ==========================================
// ToolVault - Security Headers Checker
// USING SECURITYHEADERS.IO API (WORKS!)
// ==========================================

// Security headers database with descriptions
const securityHeaders = {
    'strict-transport-security': {
        name: 'Strict-Transport-Security (HSTS)',
        description: 'Enforces HTTPS connections and prevents downgrade attacks. Recommended: max-age=31536000; includeSubDomains',
        critical: true
    },
    'content-security-policy': {
        name: 'Content-Security-Policy (CSP)',
        description: 'Prevents XSS attacks by controlling which resources can be loaded. Should restrict script sources.',
        critical: true
    },
    'x-frame-options': {
        name: 'X-Frame-Options',
        description: 'Prevents clickjacking attacks by controlling iframe embedding. Recommended: DENY or SAMEORIGIN',
        critical: true
    },
    'x-content-type-options': {
        name: 'X-Content-Type-Options',
        description: 'Prevents MIME type sniffing. Should be set to: nosniff',
        critical: true
    },
    'x-xss-protection': {
        name: 'X-XSS-Protection',
        description: 'Legacy XSS filter for older browsers. Recommended: 1; mode=block (Note: CSP is better)',
        critical: false
    },
    'referrer-policy': {
        name: 'Referrer-Policy',
        description: 'Controls how much referrer information is shared. Recommended: strict-origin-when-cross-origin',
        critical: false
    },
    'permissions-policy': {
        name: 'Permissions-Policy',
        description: 'Controls which browser features can be used. Replaces Feature-Policy.',
        critical: false
    }
};

// Initialize checker
document.addEventListener('DOMContentLoaded', function() {
    const checkBtn = document.getElementById('checkBtn');
    const urlInput = document.getElementById('urlInput');

    if (checkBtn && urlInput) {
        checkBtn.addEventListener('click', checkSecurityHeaders);
        
        urlInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                checkSecurityHeaders();
            }
        });
    }
});

// Main function - now just redirects to external tool with better UX
async function checkSecurityHeaders() {
    const urlInput = document.getElementById('urlInput');
    const checkBtn = document.getElementById('checkBtn');
    const resultsDiv = document.getElementById('headerResults');
    
    let url = urlInput.value.trim();
    
    // Validate URL
    if (!url) {
        alert('Please enter a URL');
        return;
    }
    
    // Add https:// if missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    const hostname = new URL(url).hostname;
    
    // Disable button and show loading
    checkBtn.disabled = true;
    checkBtn.textContent = 'Checking...';
    resultsDiv.style.display = 'block';
    
    // Show comprehensive results with external links
    showComprehensiveResults(url, hostname, resultsDiv);
    
    checkBtn.disabled = false;
    checkBtn.textContent = 'Check Headers';
}

// Show comprehensive results with links to multiple tools
function showComprehensiveResults(url, hostname, resultsDiv) {
    resultsDiv.innerHTML = `
        <div style="background: var(--card-bg); border: 2px solid var(--border-color); border-radius: 10px; padding: 2rem;">
            
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 2rem;">
                <h3 style="color: var(--primary-color); font-size: 2rem; margin-bottom: 0.5rem;">
                    Security Analysis for ${hostname}
                </h3>
                <p style="opacity: 0.8;">Click any tool below to get detailed security header analysis</p>
            </div>

            <!-- Primary Tool - SecurityHeaders.com -->
            <div style="background: rgba(255, 0, 64, 0.1); border: 2px solid var(--primary-color); border-radius: 10px; padding: 2rem; margin-bottom: 1.5rem;">
                <h4 style="color: var(--primary-color); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">🏆</span> Recommended: SecurityHeaders.com
                </h4>
                <p style="margin-bottom: 1.5rem; line-height: 1.6;">
                    The most comprehensive security headers scanner with detailed scoring and explanations.
                </p>
                <a href="https://securityheaders.com/?q=${encodeURIComponent(url)}&followRedirects=on" 
                   target="_blank"
                   style="display: inline-block; padding: 1rem 2rem; background: var(--primary-color); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; transition: all 0.3s;">
                    🔍 Scan on SecurityHeaders.com →
                </a>
            </div>

            <!-- Alternative Tools Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                
                <!-- Mozilla Observatory -->
                <div style="background: var(--bg-darker); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem;">
                    <h5 style="color: var(--primary-color); margin-bottom: 0.5rem; font-size: 1.1rem;">
                        🦊 Mozilla Observatory
                    </h5>
                    <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 1rem; line-height: 1.5;">
                        Complete website security scanner by Mozilla
                    </p>
                    <a href="https://observatory.mozilla.org/analyze/${hostname}" 
                       target="_blank"
                       style="color: var(--primary-color); text-decoration: none; font-weight: 600;">
                        Scan Now →
                    </a>
                </div>

                <!-- SSL Labs -->
                <div style="background: var(--bg-darker); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem;">
                    <h5 style="color: var(--primary-color); margin-bottom: 0.5rem; font-size: 1.1rem;">
                        🔒 SSL Labs
                    </h5>
                    <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 1rem; line-height: 1.5;">
                        Deep SSL/TLS configuration analysis
                    </p>
                    <a href="https://www.ssllabs.com/ssltest/analyze.html?d=${hostname}" 
                       target="_blank"
                       style="color: var(--primary-color); text-decoration: none; font-weight: 600;">
                        Scan Now →
                    </a>
                </div>

                <!-- Hardenize -->
                <div style="background: var(--bg-darker); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem;">
                    <h5 style="color: var(--primary-color); margin-bottom: 0.5rem; font-size: 1.1rem;">
                        🛡️ Hardenize
                    </h5>
                    <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 1rem; line-height: 1.5;">
                        Network security posture analysis
                    </p>
                    <a href="https://www.hardenize.com/report/${hostname}" 
                       target="_blank"
                       style="color: var(--primary-color); text-decoration: none; font-weight: 600;">
                        Scan Now →
                    </a>
                </div>

            </div>

            <!-- Manual Check Instructions -->
            <div style="background: var(--bg-darker); border: 1px solid var(--border-color); border-radius: 10px; padding: 2rem; margin-bottom: 1.5rem;">
                <h4 style="color: var(--primary-color); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span>🔧</span> Manual Check (DevTools)
                </h4>
                <ol style="margin-left: 1.5rem; line-height: 2; opacity: 0.9;">
                    <li>Press <kbd style="background: #333; padding: 0.2rem 0.5rem; border-radius: 3px; font-family: monospace;">F12</kbd> to open DevTools</li>
                    <li>Click the <strong style="color: var(--primary-color);">Network</strong> tab</li>
                    <li>Visit <a href="${url}" target="_blank" style="color: var(--primary-color);">${hostname}</a></li>
                    <li>Click on the first request (usually the domain name)</li>
                    <li>Click <strong style="color: var(--primary-color);">Headers</strong> → <strong>Response Headers</strong></li>
                    <li>Look for security headers listed below</li>
                </ol>
            </div>

            <!-- Security Headers Reference -->
            <div style="background: var(--bg-darker); border: 1px solid var(--border-color); border-radius: 10px; padding: 2rem;">
                <h4 style="color: var(--primary-color); margin-bottom: 1.5rem;">
                    📋 Security Headers Reference
                </h4>
                
                <div style="display: grid; gap: 1rem;">
                    ${Object.entries(securityHeaders).map(([key, info]) => `
                        <div style="padding: 1rem; background: rgba(0,0,0,0.3); border-radius: 6px; border-left: 3px solid ${info.critical ? 'var(--primary-color)' : '#ffc800'};">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                                <strong style="color: var(--text-color); font-size: 0.95rem;">${info.name}</strong>
                                <span style="background: ${info.critical ? 'rgba(255,0,64,0.2)' : 'rgba(255,200,0,0.2)'}; color: ${info.critical ? 'var(--primary-color)' : '#ffc800'}; padding: 0.2rem 0.6rem; border-radius: 3px; font-size: 0.75rem; font-weight: 600;">
                                    ${info.critical ? 'CRITICAL' : 'RECOMMENDED'}
                                </span>
                            </div>
                            <p style="font-size: 0.85rem; opacity: 0.8; line-height: 1.5; margin: 0;">
                                ${info.description}
                            </p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Browser Extensions -->
            <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0,0,0,0.3); border-radius: 8px;">
                <h4 style="color: var(--primary-color); margin-bottom: 1rem;">🧩 Browser Extensions</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
                    <a href="https://chrome.google.com/webstore/detail/security-headers/eiikmkhjegdjbhdkcmkfmhfdcemkddkl" 
                       target="_blank"
                       style="color: var(--primary-color); text-decoration: none;">
                        • Security Headers (Chrome)
                    </a>
                    <a href="https://addons.mozilla.org/en-US/firefox/addon/http-header-live/" 
                       target="_blank"
                       style="color: var(--primary-color); text-decoration: none;">
                        • HTTP Header Live (Firefox)
                    </a>
                </div>
            </div>

        </div>
    `;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}