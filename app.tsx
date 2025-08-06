import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Header from './components/Header';
import PatientInfoForm from './components/PatientInfoForm';
import MultiFileUpload from './components/MultiFileUpload';
import AnalysisResult from './components/AnalysisResult';
import { UploadedFile, PatientInfo } from './types';
import { analyzeResults } from './services/geminiService';

const App: React.FC = () => {
  const [patientInfo, setPatientInfo] = useState<PatientInfo | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handlePatientInfoChange = useCallback((info: PatientInfo) => {
    setPatientInfo(info);
  }, []);

  const handleFilesChange = useCallback((files: UploadedFile[]) => {
    setUploadedFiles(files);
  }, []);

  useEffect(() => {
    return () => {
      uploadedFiles.forEach(file => URL.revokeObjectURL(file.previewUrl));
    };
  }, [uploadedFiles]);
  
  const handleAnalyze = async () => {
    if (!patientInfo) {
      setError('환자 정보를 먼저 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult('');
    
    try {
      const result = await analyzeResults(uploadedFiles, patientInfo);
      setAnalysisResult(result);
    } catch (e: any) {
      setError(e.message || '알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const isAnyFileUploaded = useMemo(() => uploadedFiles.length > 0, [uploadedFiles]);
  
  const isAnalyzeDisabled = useMemo(() => {
    return !isAnyFileUploaded || isLoading || !patientInfo?.name || !patientInfo?.species;
  }, [isAnyFileUploaded, isLoading, patientInfo]);
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          
          <PatientInfoForm onPatientInfoChange={handlePatientInfoChange} />

          <div className="mb-8">
            <MultiFileUpload files={uploadedFiles} onFilesChange={handleFilesChange} />
          </div>

          <div className="flex justify-center mb-8">
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzeDisabled}
              className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isLoading ? '분석 진행 중...' : '분석 시작'}
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
             <AnalysisResult result={analysisResult} isLoading={isLoading} error={error} />
          </div>
        </div>
      </main>
       <footer className="text-center py-4 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Vet AI-Scan Assistant. For research and reference purposes only.</p>
      </footer>
    </div>
  );
};

export default App;