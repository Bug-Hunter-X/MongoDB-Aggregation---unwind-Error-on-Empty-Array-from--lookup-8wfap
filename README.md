# MongoDB Aggregation: Handling Empty Arrays in $unwind

This repository demonstrates a common error encountered when using the `$unwind` operator in MongoDB aggregation pipelines after a `$lookup` operation.  The error arises when the `$lookup` returns an empty array for a particular document, and the `$unwind` operator cannot handle this gracefully.

The `bug.js` file contains the problematic code, showcasing the error. The `solution.js` file provides a corrected version that addresses the issue using the `$ifNull` operator or other appropriate techniques.