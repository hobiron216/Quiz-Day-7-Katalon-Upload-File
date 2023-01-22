<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Upload multiple file</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>82ef7096-dabe-4d78-abd3-f6ac058a46f6</testSuiteGuid>
   <testCaseLink>
      <guid>da9d6447-b73b-4f95-acda-4f1e6619f4d7</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>'E:\\Book1.xlsx'</defaultValue>
         <description></description>
         <id>c7294508-e0b6-4282-b97c-582d1c065c0f</id>
         <masked>false</masked>
         <name>file_path</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/TC01 - Berhasil upload file - Positive</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>249b6569-1ffa-4eda-a273-d5b5baf6d63d</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Path file upload excel</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>249b6569-1ffa-4eda-a273-d5b5baf6d63d</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>file_path</value>
         <variableId>c7294508-e0b6-4282-b97c-582d1c065c0f</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
