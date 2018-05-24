$output.innerHTML += 'Added WinRT.js file\r\n';

var process_list = window.Windows.System.Diagnostics.ProcessDiagnosticInfo.getForProcesses();

for (let index in process_list) {
	if (!process_list.hasOwnProperty(index)) continue;

	let process_name = process_list[index].executableFileName;
	switch (process_name) {
		case 'Narrator.exe':
			$output.innerHTML += 'Narrator is currently running\r\n';
			break;
		case 'jfw.exe':
			$output.innerHTML += 'JAWS is currently running\r\n';
			break;
		case 'nvda.exe':
			$output.innerHTML += 'NVDA is currently running\r\n';
			break;
	}
}